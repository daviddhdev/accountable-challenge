import type { MultiForm } from "@/utils/types/formTypes";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

//This will change later so we can read the values from the local storage
const DEFAULTS: MultiForm = {
  step: 1,
  country: "USA",
  image: "",
  socialSecurityNumber: "",
  state: "",
  zipCode: "",
};
export default function Home() {
  const { handleSubmit } = useForm<MultiForm>({
    defaultValues: DEFAULTS,
  });
  const onSubmit: SubmitHandler<MultiForm> = (data) => console.log(data);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}></form>
      </main>
    </div>
  );
}
