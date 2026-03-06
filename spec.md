# EduSite

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- A public-facing education website with the following sections:
  - Hero/landing section with headline and call-to-action
  - Courses/Programs listing page with course cards (title, description, duration, difficulty)
  - Course detail view
  - About Us page (mission, team section)
  - Contact/Enroll form (name, email, message, submit)
  - Navigation header with links to all sections

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: Store courses (id, title, description, duration, difficulty, imageUrl), contact/enrollment submissions (name, email, message, timestamp)
2. Backend: Expose query to list courses, get course by id; update to submit enrollment inquiry
3. Frontend: Multi-page layout with navbar and footer
4. Frontend: Home page with hero and featured courses
5. Frontend: Courses listing page with course cards
6. Frontend: Course detail page
7. Frontend: About page
8. Frontend: Contact/Enroll form wired to backend
