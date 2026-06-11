export default function HomePage() {
    return (
        <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                NAKFE
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
                En moderne nettside for NAKFE
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-gray-600">
                Dette er første versjon av nettsiden. Senere skal vi koble på en
                RAG-basert chatbot som kan svare på spørsmål om organisasjonen.
            </p>
        </section>
    );
}