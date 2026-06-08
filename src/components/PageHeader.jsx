// Consistent page title block used at the top of inner pages.
export default function PageHeader({ eyebrow = 'mashio project', title, intro }) {
  return (
    <header className="border-b border-brown/10 bg-tan/40">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">{title}</h1>
        {intro && <p className="mx-auto mt-5 max-w-xl text-brown">{intro}</p>}
      </div>
    </header>
  )
}
