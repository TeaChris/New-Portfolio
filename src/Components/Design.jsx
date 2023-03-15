import { Fade } from "react-reveal";

const Design = () => {
  return (
    <section className="container mx-auto flex flex-col gap-8 p-4 md:grid grid-cols-2 mt-40 p-1">
      <Fade bottom>
        <div className="flex flex-col gap-4 items-start">
          <h2 className="text-4xl font-bold text-green-900">Design</h2>
          <p className="text-slate-500">
            I'm probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you'll find me (~_^). I'm committed to creating fluent user
            experiences while staying fashionable.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-start">
          <h2 className="text-4xl font-bold text-green-900">Enginerring</h2>
          <p className="text-slate-500">
            In building JavaScript applications, I'm equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized for scale — performance
            and scalabilty are priorities on my radar.
          </p>
        </div>
      </Fade>
    </section>
  );
};
export default Design;
