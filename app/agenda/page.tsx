import Image from "next/image";

const agendaImages = [
  "/images/agenda/1.jpg",
  "/images/agenda/2.jpg",
  "/images/agenda/3.jpg",
  "/images/agenda/4.jpg",
  "/images/agenda/5.jpg",
];

const AgendaPage = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Event Agenda</h1>
      <div className="flex flex-col gap-8">
        {agendaImages.map((src, index) => (
          <div key={index} className="w-full rounded-lg overflow-hidden shadow-md">
            <Image
              src={src}
              alt={`Agenda Poster ${index + 1}`}
              width={3508}
              height={4955}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaPage;
