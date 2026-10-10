import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Emily Carter
            </td>
            <td className="p-2">001234561S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-01</td>
            <td className="p-2">10:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Michael Brooks
            </td>
            <td className="p-2">001234562S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-11-02</td>
            <td className="p-2">23:32:23</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Sarah Mitchell
            </td>
            <td className="p-2">001234563S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-02</td>
            <td className="p-2">13:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Ryan Thompson
            </td>
            <td className="p-2">001234564S</td>
            <td className="p-2">S101</td>
            <td className="p-2">TA</td>
            <td className="p-2">2020-11-05</td>
            <td className="p-2">11:22:33</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Amey Mohile
            </td>
            <td className="p-2">002345671S</td>
            <td className="p-2">S102</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2026-10-09</td>
            <td className="p-2">14:05:12</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Deep Bhatt
            </td>
            <td className="p-2">002345672S</td>
            <td className="p-2">S102</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2026-10-08</td>
            <td className="p-2">09:47:30</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Jason Alexander
            </td>
            <td className="p-2">002345673S</td>
            <td className="p-2">S102</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2026-10-07</td>
            <td className="p-2">11:16:44</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Jane Sample
            </td>
            <td className="p-2">009999991S</td>
            <td className="p-2">S199</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2026-01-01</td>
            <td className="p-2">00:00:00</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Alex Sample
            </td>
            <td className="p-2">009999992S</td>
            <td className="p-2">S199</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2026-01-01</td>
            <td className="p-2">00:00:00</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Sam Sample
            </td>
            <td className="p-2">009999993S</td>
            <td className="p-2">S199</td>
            <td className="p-2">TA</td>
            <td className="p-2">2026-01-01</td>
            <td className="p-2">00:00:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
