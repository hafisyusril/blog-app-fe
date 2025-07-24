import { Input } from "@/components/ui/input";

const Jumbotron = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[30vh] gap-4">
      <h1 className="text-6xl font-bold">BlogGo</h1>
      <p>Food, travel, and recipes.</p>
      <Input type="text" placeholder="Search..." className="max-w-md" />
    </section>
  );
};

export default Jumbotron;
