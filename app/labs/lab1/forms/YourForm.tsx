export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <label htmlFor="wd-your-first-name">First name:</label>
      <input id="wd-your-first-name" defaultValue="Amey" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input id="wd-your-last-name" defaultValue="Mohile" />
      <br />
      <label htmlFor="wd-your-password">Password:</label>
      <input id="wd-your-password" type="password" defaultValue="webdev2026" />
      <br />

      <label htmlFor="wd-your-bio">Why I&apos;m taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={4}
        defaultValue="Robotics and Physical AI person who wants the web side too. By the end of the term I want to build and ship a full stack app on my own."
      />
      <br />

      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <input type="radio" name="your-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <label>Interests:</label>
      <br />
      <input type="checkbox" id="wd-your-robotics" defaultChecked />
      <label htmlFor="wd-your-robotics">Robotics</label>
      <input type="checkbox" id="wd-your-physical-ai" defaultChecked />
      <label htmlFor="wd-your-physical-ai">Physical AI</label>
      <input type="checkbox" id="wd-your-embedded" defaultChecked />
      <label htmlFor="wd-your-embedded">Embedded systems</label>
      <input type="checkbox" id="wd-your-full-stack" />
      <label htmlFor="wd-your-full-stack">Full stack web</label>
      <br />

      <label htmlFor="wd-your-major">Major:</label>
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="ROBOTICS">Robotics</option>
        <option value="ECE">Electrical and Computer Engineering</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to go deeper on:</label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "MONGODB"]}
      >
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="NODE">Node.js</option>
        <option value="MONGODB">MongoDB</option>
        <option value="TAILWIND">Tailwind</option>
      </select>
      <br />

      <label htmlFor="wd-your-email">School email:</label>
      <input
        type="email"
        id="wd-your-email"
        defaultValue="mohile.a@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year:</label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue={2027}
        min={2025}
        max={2030}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start:</label>
      <input type="date" id="wd-your-start-date" defaultValue="2025-09-09" />
      <br />
      <label htmlFor="wd-your-excitement">How excited I am (0-10):</label>
      <input
        type="range"
        id="wd-your-excitement"
        min={0}
        max={10}
        defaultValue={8}
      />
      <br />

      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
