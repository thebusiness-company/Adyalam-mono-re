# Spec and build

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:

- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

---

## Workflow Steps

### [x] Step: Technical Specification
20→
21→Assess the task's difficulty, as underestimating it leads to poor outcomes.
22→
23→- easy: Straightforward implementation, trivial bug fix or feature
24→- medium: Moderate complexity, some edge cases or caveats to consider
25→- hard: Complex logic, many caveats, architectural considerations, or high-risk changes
26→
27→Create a technical specification for the task that is appropriate for the complexity level:
28→
29→- Review the existing codebase architecture and identify reusable components.
30→- Define the implementation approach based on established patterns in the project.
31→- Identify all source code files that will be created or modified.
32→- Define any necessary data model, API, or interface changes.
33→- Describe verification steps using the project's test and lint commands.
34→
35→Save the output to `j:\Projects\adyalam\.zencoder\chats\aabdc220-d20f-433b-8824-596aa95348e8/spec.md` with:
36→
37→- Technical context (language, dependencies)
38→- Implementation approach
39→- Source code structure changes
40→- Data model / API / interface changes
41→- Verification approach
42→
43→**Task Difficulty**: medium
44→
45→If the task is complex enough, create a detailed implementation plan based on `j:\Projects\adyalam\.zencoder\chats\aabdc220-d20f-433b-8824-596aa95348e8/spec.md`:
46→
47→- Break down the work into concrete tasks (incrementable, testable milestones)
48→- Each task should reference relevant contracts and include verification steps
49→- Replace the Implementation step below with the planned tasks
50→
51→Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function).
52→
53→Save to `j:\Projects\adyalam\.zencoder\chats\aabdc220-d20f-433b-8824-596aa95348e8/plan.md`. If the feature is trivial and doesn't warrant this breakdown, keep the Implementation step below as is.
54→
55→---
56→
57→### [ ] Step: Implementation
58→
59→Implement the task according to the technical specification and general engineering best practices.
60→
61→- [ ] **Task 1: Update `Blog4.jsx` to fetch real data**
62→- [ ] **Task 2: Update `Blog3.jsx` to fetch real data**
63→- [ ] **Task 3: Refine `BlogDetails.jsx` to correctly display fetched content**
64→- [ ] **Task 4: Update `AdminBlog.jsx` with better feedback**
65→- [ ] **Task 5: Final verification and report**
66→
67→1. Break the task into steps where possible.
68→2. Implement the required changes in the codebase.
69→3. Add and run relevant tests and linters.
70→4. Perform basic manual verification if applicable.
71→5. After completion, write a report to `j:\Projects\adyalam\.zencoder\chats\aabdc220-d20f-433b-8824-596aa95348e8/report.md` describing:
72→   - What was implemented
73→   - How the solution was tested
74→   - The biggest issues or challenges encountered
