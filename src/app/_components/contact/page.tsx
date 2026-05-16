import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section bg-beauty-cream text-center p-10"
    >
      <h2 className="title text-3xl font-bold mb-4 lg:text-4xl">Contact</h2>

      <p className="subtitle max-w-2xl mx-auto">
        Prenez rendez-vous dès aujourd’hui pour découvrir nos soins esthétiques premium.
      </p>

      <form className="max-w-3xl mx-auto mt-14 grid gap-5">
        <input
          type="text"
          placeholder="Nom"
          className="border rounded-2xl p-4 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="border rounded-2xl p-4 outline-none"
        />

        <textarea
          placeholder="Votre message"
          rows={6}
          className="border rounded-2xl p-4 outline-none"
        />

        <Button className="btn w-fit mx-auto px-10" size="lg">
          Envoyer
        </Button>
      </form>
    </section>
  )
}