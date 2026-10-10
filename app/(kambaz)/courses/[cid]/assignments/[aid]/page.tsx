import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  const input = "w-full rounded border border-neutral-300 px-3 py-2";
  const label = "pt-2 sm:text-right";
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block">
        Assignment Name
      </label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className={`${input} mb-4`} />
      <label htmlFor="wd-description" className="mb-1 block">
        Description
      </label>
      <textarea
        id="wd-description"
        rows={6}
        className={`${input} mb-6 font-sans`}
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
      />

      <div className="grid grid-cols-1 items-start gap-x-4 gap-y-2 sm:grid-cols-[160px_1fr] sm:gap-y-4">
        <label htmlFor="wd-points" className={label}>
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={input} />

        <label htmlFor="wd-group" className={label}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className={label}>
          Display Grade as
        </label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={input}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>

        <label htmlFor="wd-submission-type" className={label}>
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-4">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${input} mb-4`}>
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
          <div className="mb-2 font-semibold">Online Entry Options</div>
          <div className="flex flex-col gap-2">
            <label htmlFor="wd-text-entry" className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" /> Text Entry
            </label>
            <label htmlFor="wd-website-url" className="flex items-center gap-2">
              <input type="checkbox" id="wd-website-url" defaultChecked /> Website URL
            </label>
            <label htmlFor="wd-media-recordings" className="flex items-center gap-2">
              <input type="checkbox" id="wd-media-recordings" /> Media Recordings
            </label>
            <label htmlFor="wd-student-annotation" className="flex items-center gap-2">
              <input type="checkbox" id="wd-student-annotation" /> Student Annotation
            </label>
            <label htmlFor="wd-file-upload" className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" /> File Uploads
            </label>
          </div>
        </div>

        <div className={label}>Assign</div>
        <div className="rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${input} mb-4`} />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue="2026-05-13"
            className={`${input} mb-4`}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block font-semibold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2026-05-06"
                className={input}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block font-semibold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2026-05-20"
                className={input}
              />
            </div>
          </div>
        </div>
      </div>

      <label htmlFor="wd-ai-editor-notes" className="mt-6 mb-1 block">
        Sample notes
      </label>
      <textarea id="wd-ai-editor-notes" rows={3} className={`${input} font-sans`} />

      <hr className="my-6" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
