import QuestionHeader from "@/components/QuestionHeader";

function Question3() {
  return (
    <>
      <QuestionHeader />

      <div className="default-card-col">
        <h1>Question 3</h1>
        <p>Layout implementation using Tailwind CSS with flexbox only:</p>
      </div>

      <div className="w-full max-w-4xl mx-auto flex-wrap">
        <div className="bg-cyan-400 text-center py-4">Header</div>
        <div className="flex flex-wrap">
          <div className="flex flex-col w-full md:w-1/3">
            <div className="bg-purple-300 text-center py-8">Hero</div>
            <div className="bg-green-400 text-center py-16 flex-1">Sidebar</div>
          </div>
          <div className="flex flex-col w-full md:w-2/3">
            <div className="bg-yellow-400 text-center py-12">Main Content</div>
            <div className="bg-gray-500 text-center py-8">
              <p>Extra Content</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptas. Ipsum dolor
                sit amet consectetur adipisicing elit. Quae, voluptas.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-green-500 text-center py-6 w-2/3">Related Images</div>

          <div className="bg-pink-300 text-center py-6 w-1/3">Related</div>
        </div>

        <div className="bg-orange-500 text-center py-4">Footer</div>
      </div>
    </>
  );
}

export default Question3;
