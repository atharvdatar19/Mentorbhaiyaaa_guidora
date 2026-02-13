-- Colleges Table
CREATE TABLE colleges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  city TEXT,
  state TEXT,
  admission_type TEXT,
  application_end DATE,
  official_link TEXT
);

-- Exams Timeline Table
CREATE TABLE exams_timeline (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_name TEXT NOT NULL,
  registration_end DATE,
  exam_date DATE,
  official_link TEXT
);
