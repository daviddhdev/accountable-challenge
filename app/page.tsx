import { FormWrapper } from "@/app/components/form/FormWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8 w-full">
        <main className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-foreground">Sign Up</h1>
            <p className="mt-2 text-secondary">
              Complete your registration in a few simple steps
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-border p-6">
            <FormWrapper />
          </div>
        </main>
      </div>
    </div>
  );
}
