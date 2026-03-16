from fastapi import FastAPI, Depends
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from pydantic import BaseModel
from typing import Dict, List, Optional
from fastapi.middleware.cors import CORSMiddleware

DATABASE_URL = "postgresql://postgres:1234@localhost:5432/webinar_db"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()


# ---------------- DATABASE MODEL ----------------

class StudentTest(Base):

    __tablename__ = "student_tests"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)

    answers = Column(JSON)
    clusters = Column(JSON)
    top_clusters = Column(JSON)


Base.metadata.create_all(bind=engine)


# ---------------- APP ----------------

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------- SCHEMAS ----------------

class StudentTestCreate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    answers: Dict[str, int]


class ClusterResult(BaseModel):
    cluster: str
    score: int
    band: str


class StudentResult(BaseModel):
    clusters: List[ClusterResult]
    top_clusters: List[str]
    careers: List[str]


# ---------------- CLUSTER MAP ----------------

cluster_questions = {

    "Analytical & Tech": ["1", "2", "3", "4"],
    "Business & Management": ["5", "6", "7", "8"],
    "Creative & Media": ["9", "10", "11", "12"],
    "People & Helping": ["13", "14", "15", "16"],
    "Practical & Operations": ["17", "18", "19", "20"],
    "Structure & Detail": ["21", "22", "23", "24"]

}


career_map = {

    "Analytical & Tech": [
        "Software Engineer",
        "Data Scientist",
        "AI Engineer"
    ],

    "Business & Management": [
        "Entrepreneur",
        "Business Analyst",
        "Product Manager"
    ],

    "Creative & Media": [
        "Graphic Designer",
        "Content Creator",
        "Film Maker"
    ],

    "People & Helping": [
        "Psychologist",
        "Teacher",
        "HR Manager"
    ],

    "Practical & Operations": [
        "Mechanical Engineer",
        "Civil Engineer",
        "Operations Manager"
    ],

    "Structure & Detail": [
        "Accountant",
        "Auditor",
        "Project Planner"
    ]

}


# ---------------- BAND LOGIC ----------------

def get_band(score):

    if score >= 16:
        return "High"
    elif score >= 11:
        return "Moderate"
    else:
        return "Low"


# ---------------- DB SESSION ----------------

def get_db():

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


# ---------------- API ----------------
@app.post("/submit-test", response_model=StudentResult)
def submit_test(test: StudentTestCreate, db: Session = Depends(get_db)):

    clusters_result = []
    cluster_scores = {}

    for cluster_name, questions in cluster_questions.items():

        score = sum(int(test.answers.get(q, 0)) for q in questions)

        band = get_band(score)

        clusters_result.append({
            "cluster": cluster_name,
            "score": score,
            "band": band
        })

        cluster_scores[cluster_name] = score

    sorted_clusters = sorted(
        clusters_result,
        key=lambda x: x["score"],
        reverse=True
    )

    top_clusters = [
        sorted_clusters[0]["cluster"],
        sorted_clusters[1]["cluster"]
    ]

    careers = []

    for cluster in top_clusters:
        careers.extend(career_map.get(cluster, []))

    new_test = StudentTest(
        name=test.name,
        email=test.email,
        answers=test.answers,
        clusters=clusters_result,
        top_clusters=top_clusters
    )

    db.add(new_test)
    db.commit()
    db.refresh(new_test)

    return {
        "clusters": clusters_result,
        "cluster_scores": cluster_scores,
        "top_clusters": top_clusters,
        "careers": careers
    }