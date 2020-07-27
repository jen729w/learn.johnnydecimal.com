import React from "react"

/**
 * Make sure that this file isn't prettied-up by prettier. It depends on the
 * exact formatting as shown.
 */

const OneReminder = () => (
  <pre className="inline-block px-4 py-2 text-orange-800 whitespace-pre bg-orange-100 border-2 border-orange-600 rounded-md shadow-md font-jdmono">{`23.24    31.70
22.39    13.04
31.71    21.02
22.38    13.03
23.21    23.22
32.56    12.34
12.35    21.01
32.55    23.23`}</pre>
)

const TwoGroupThingsTogether = () => (
  <pre className="inline-block px-2 py-2 text-sm text-orange-800 whitespace-pre bg-orange-100 border-2 border-orange-600 rounded-md shadow-md sm:px-4 sm:text-base font-jdmono">
<span className="border-b border-orange-700 border-dotted">
The 12 numbers 
</span>
{`    `}
<span className="border-b border-orange-700 border-dotted">
The 13 numbers
</span>
<br />
{`    12.34  12.35      13.03  13.04`}
<br />
<br />
<span className="border-b border-orange-700 border-dotted">
The 21 numbers
</span>
{`    `}
<span className="border-b border-orange-700 border-dotted">
The 22 numbers
</span>
<br />
{`    21.01  21.02      22.38  22.39`}
<br />
<br />
<span className="border-b border-orange-700 border-dotted">
The 23 numbers
</span>
{`    `}
<span className="border-b border-orange-700 border-dotted">
The 31 numbers
</span>
<br />
{`    23.21  23.22      31.70  31.71`}
<br />
{`    23.23  23.24`}
<br />
<br />
<span className="border-b border-orange-700 border-dotted">
The 32 numbers
</span>
<br />
{`    32.55  32.56`}
  </pre>
)

const ThreeDoItAgain = () => (
  <pre className="inline-block px-4 py-2 text-sm text-orange-800 whitespace-pre bg-orange-100 border-2 border-orange-600 rounded-md shadow-md sm:text-base font-jdmono">
<span className="border-b-2 border-orange-600">The 10-19 numbers</span>
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
The 12 numbers
</span>
<br />
{`       12.34  12.35`}
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
The 13 numbers
</span>
<br />
{`       13.03  13.04`}
<br />
<br />
<span className="border-b-2 border-orange-600">The 20-29 numbers</span>
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
The 21 numbers
</span>
<br />
{`       21.01  21.02`}
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
The 22 numbers
</span>
<br />
{`       22.38  22.39`}
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
The 23 numbers
</span>
<br />
{`       23.21  23.22`}
<br />
{`       23.23  23.24`}
<br />
<br />
<span className="border-b-2 border-orange-600">The 30-39 numbers</span>
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
The 31 numbers
</span>
<br />
{`       31.70  31.71`}
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
The 32 numbers
</span>
<br />
{`       32.55  32.56`}
  </pre>
)

const FourCompanyNoNumbers = () => (
  <pre className="inline-block px-2 py-2 text-xs text-orange-800 whitespace-pre bg-orange-100 border-2 border-orange-600 rounded-md shadow-md sm:px-4 sm:text-base font-jdmono">
<div className="mb-2 font-bold border-b-2 border-orange-600 border-dashed">{`Folder                         This is a...`}</div>
<span className="border-b-2 border-orange-600">Finance</span>
{`                        AREA`}
<br />
{`  `}
<span className="border-b border-orange-600 border-dotted">Tax returns</span>
{`                  CATEGORY`}
<br />
{`  `}
<span className="border-b border-orange-600 border-dotted">Payroll</span>
{`                      CATEGORY`}
<br />
{`    September ’17 payroll      UNIQUE THING`}
<br />
{`    October ’17 payroll        UNIQUE THING`}
<br />
{`  `}
<span className="border-b border-orange-600 border-dotted">Bookkeeping</span>
{`                  CATEGORY`}
<br />
<br />
<span className="border-b-2 border-orange-600">Administration</span>
{`                 AREA`}
<br />
{`  `}
<span className="border-b border-orange-600 border-dotted">Company registration</span>
{`         CATEGORY`}
<br />
{`  `}
<span className="border-b border-orange-600 border-dotted">Contracts</span>
{`                    CATEGORY`}
<br />
{`    Cleaning contract          UNIQUE THING`}
<br />
{`    Office lease               UNIQUE THING`}
<br />
{`  `}
<span className="border-b border-orange-600 border-dotted">Staffing</span>
{`                     CATEGORY`}
<br />
<br />
<span className="border-b-2 border-orange-600">Marketing</span>
{`                      AREA`}
<br />
{`  ...etc.                      ...etc.`}
  </pre>
)

const FiveCompanyWithNumbers = () => (
  <pre className="inline-block px-2 py-2 text-xs text-orange-800 whitespace-pre bg-orange-100 border-2 border-orange-600 rounded-md shadow-md sm:px-4 sm:text-base font-jdmono">
<div className="mb-2 font-bold border-b-2 border-orange-600 border-dashed">{`Folder                         This is a...`}</div>
<span className="border-b-2 border-orange-600">10-19 Finance</span>
{`                  AREA`}
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
  11 Tax returns
</span>
{`              CATEGORY`}
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">12 Payroll</span>
{`                  CATEGORY`}
<br />
{`      12.01 Sept ’17 payroll   UNIQUE THING`}
<br />
{`      12.02 Oct ’17 payroll    UNIQUE THING`}
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
  13 Bookkeeping
</span>
{`              CATEGORY`}
<br />
<br />
<span className="border-b-2 border-orange-600">20-29 Administration</span>
{`           AREA`}
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
  21 Company registration
</span>
{`     CATEGORY`}
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
  22 Contracts
</span>
{`                CATEGORY`}
<br />
{`      22.01 Cleaning contract  UNIQUE THING`}
<br />
{`      22.02 Office lease       UNIQUE THING`}
<br />
{`   `}
<span className="border-b border-orange-600 border-dotted">
  23 Staffing
</span>
{`                 CATEGORY`}
<br />
<br />
<span className="border-b-2 border-orange-600">30-39 Marketing</span>
{`                AREA`}
<br />
{`  ...etc.                      ...etc.`}
  </pre>
)

const SixTodayWeHave = () => (
  <pre className="inline-block px-4 py-2 text-sm text-orange-800 whitespace-pre bg-orange-100 border-2 border-orange-600 rounded-md shadow-md sm:text-base font-jdmono">{`Administration
Finance
Marketing`}</pre>
)

const SevenAndThenExports = () => (
  <pre className="inline-block px-4 py-2 text-sm text-orange-800 whitespace-pre bg-orange-100 border-2 border-orange-600 rounded-md shadow-md sm:text-base font-jdmono">{`Administration
Exports        `}<span className="font-bold">← new folder</span><br />
{`Finance
Marketing`}</pre>
)

const EightThisIsBetter = () => (
<pre className="inline-block px-4 py-2 text-sm text-orange-800 whitespace-pre bg-orange-100 border-2 border-orange-600 rounded-md shadow-md sm:text-base font-jdmono">{`10-19 Administration
20-29 Finance
30-39 Marketing
40-49 Exports`}</pre>
)

export {
  OneReminder,
  TwoGroupThingsTogether,
  ThreeDoItAgain,
  FourCompanyNoNumbers,
  FiveCompanyWithNumbers,
  SixTodayWeHave,
  SevenAndThenExports,
  EightThisIsBetter
}
