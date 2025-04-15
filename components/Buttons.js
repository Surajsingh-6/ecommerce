import React from 'react'

function Buttons({text}) {
  return (
    <button className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8C7F7C_0%,#DAD6D7_50%,#8C7F7C_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                        {text}
                    </span>
                </button>
  )
}

export default Buttons  