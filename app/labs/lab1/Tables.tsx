export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Next.js</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">State</td>
            <td align="center">3/10/21</td>
            <td align="right">79</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Node.js</td>
            <td align="center">3/17/21</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Express</td>
            <td align="center">3/24/21</td>
            <td align="right">86</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">MongoDB</td>
            <td align="center">3/31/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Deployment</td>
            <td align="center">4/7/21</td>
            <td align="right">90</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">89</td>
          </tr>
        </tfoot>
      </table>
      <h5>My week</h5>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Day</th>
            <th>What</th>
            <th align="center">Time</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>TA grading</td>
            <td align="center">6:00 - 9:00 PM</td>
            <td align="right">3</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>CS 5610 lecture (online)</td>
            <td align="center">6:00 - 9:00 PM</td>
            <td align="right">3</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Bouldering</td>
            <td align="center">7:00 - 9:00 PM</td>
            <td align="right">2</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>Long run</td>
            <td align="center">8:00 - 9:30 AM</td>
            <td align="right">1.5</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Assignments</td>
            <td align="center">1:00 - 2:00 PM</td>
            <td align="right">1</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Assignments</td>
            <td align="center">5:00 - 7:00 PM</td>
            <td align="right">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
