import React from "react"

const LearnHeader = () => (
  <>
    {/* J•D is active */}
    <div className="px-4 pt-4 pb-2 font-sans font-semibold border-b-2 border-red-600 md:px-8 md:pb-1 bg-grey-100">
      <span className="hidden font-bold text-red-600 md:inline">
        Johnny•Decimal
      </span>
      <span className="font-bold text-red-600 md:hidden">J•D</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span className="">Learn</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span className="">Chat</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span className="">App</span>
    </div>

    <div className="mt-10" />

    {/* Learn is active */}
    <div className="px-4 pt-4 pb-2 font-sans font-semibold border-b-2 border-orange-600 md:px-8 md:pb-1 bg-grey-100">
      <span className="hidden md:inline">Johnny•Decimal</span>
      <span className="md:hidden">J•D</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span className="font-bold text-orange-600">Learn</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span className="">Chat</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span className="">App</span>
    </div>

    <div>And now the rest</div>
  </>
)

export default LearnHeader
