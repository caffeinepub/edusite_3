# EduSite

## Current State
Education website with courses stored in the Motoko backend. Has 6 sample courses (Math, Science, Programming, History, English, Arts). Frontend has category filters.

## Requested Changes (Diff)

### Add
- Indian History course (category: India Studies)
- Indian Economy course (category: India Studies)
- Indian Geography course (category: India Studies)
- "India Studies" category to the frontend filter list

### Modify
- Backend `initializeCourses` to include 3 new Indian courses (ids 7, 8, 9)
- Frontend CATEGORIES array to include "India Studies"

### Remove
Nothing removed

## Implementation Plan
1. Add 3 new courses to the backend initializeCourses function
2. Add "India Studies" to the CATEGORIES filter in CoursesPage.tsx
