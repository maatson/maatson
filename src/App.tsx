import "./App.css";
import PrimaryButton from "./components/buttons/PrimaryButton";

function App() {
  return (
    <>
      <div className="">
        <h1 className=" text-center text-grey-a-50">Maatson maritime</h1>
        <h1 className="text-red-600 text-center text-h1">Maatson maritime</h1>
        <h1 className="text-red-600 text-center rounded-sm">
          Maatson maritime
        </h1>
        {/* small */}
        <div className="flex gap-10 items-center justify-center">
          {/* primary */}
          <div className="flex flex-col gap-5">
            <PrimaryButton label={"Send Email"} size={"s"} variant={""} />
            <PrimaryButton
              label={"Send Email"}
              size={"s"}
              variant={""}
              disabled
            />
          </div>
          {/* secondary */}
          <div className="flex flex-col gap-5">
            <PrimaryButton
              label={"Send Email"}
              size={"s"}
              variant={"secondary"}
            />
            <PrimaryButton
              label={"Send Email"}
              size={"s"}
              variant={"secondary"}
              disabled
            />
          </div>
          {/* ouline */}
          <div className="flex flex-col gap-5">
            <PrimaryButton
              label={"Send Email"}
              size={"s"}
              variant={"outline"}
            />
            <PrimaryButton
              label={"Send Email"}
              size={"s"}
              variant={"outline"}
              disabled
            />
          </div>
          {/* link */}
          <div className="flex flex-col gap-5">
            <PrimaryButton label={"Send Email"} size={"s"} variant={"link"} />
            <PrimaryButton
              label={"Send Email"}
              size={"s"}
              variant={"link"}
              disabled
            />
          </div>
        </div>
        {/* medium */}
        <div className="flex gap-10 items-center justify-center">
          {/* primary */}
          <div className="flex flex-col gap-5">
            <PrimaryButton label={"Send Email"} size={"m"} variant={""} />
            <PrimaryButton
              label={"Send Email"}
              size={"m"}
              variant={""}
              disabled
            />
          </div>
          {/* secondary */}
          <div className="flex flex-col gap-5">
            <PrimaryButton
              label={"Send Email"}
              size={"m"}
              variant={"secondary"}
            />
            <PrimaryButton
              label={"Send Email"}
              size={"m"}
              variant={"secondary"}
              disabled
            />
          </div>
          {/* ouline */}
          <div className="flex flex-col gap-5">
            <PrimaryButton
              label={"Send Email"}
              size={"m"}
              variant={"outline"}
            />
            <PrimaryButton
              label={"Send Email"}
              size={"m"}
              variant={"outline"}
              disabled
            />
          </div>
          {/* link */}
          <div className="flex flex-col gap-5">
            <PrimaryButton label={"Send Email"} size={"m"} variant={"link"} />
            <PrimaryButton
              label={"Send Email"}
              size={"m"}
              variant={"link"}
              disabled
            />
          </div>
        </div>
        {/* large */}
        <div className="flex gap-10 items-center justify-center">
          {/* primary */}
          <div className="flex flex-col gap-5">
            <PrimaryButton label={"Send Email"} size={"l"} variant={""} />
            <PrimaryButton
              label={"Send Email"}
              size={"l"}
              variant={""}
              disabled
            />
          </div>
          {/* secondary */}
          <div className="flex flex-col gap-5">
            <PrimaryButton
              label={"Send Email"}
              size={"l"}
              variant={"secondary"}
            />
            <PrimaryButton
              label={"Send Email"}
              size={"l"}
              variant={"secondary"}
              disabled
            />
          </div>
          {/* ouline */}
          <div className="flex flex-col gap-5">
            <PrimaryButton
              label={"Send Email"}
              size={"l"}
              variant={"outline"}
            />
            <PrimaryButton
              label={"Send Email"}
              size={"l"}
              variant={"outline"}
              disabled
            />
          </div>
          {/* link */}
          <div className="flex flex-col gap-5">
            <PrimaryButton label={"Send Email"} size={"l"} variant={"link"} />
            <PrimaryButton
              label={"Send Email"}
              size={"l"}
              variant={"link"}
              disabled
            />
          </div>
        </div>
        {/* double large */}
        <div className="flex gap-10 items-center justify-center">
          {/* primary */}
          <div className="flex flex-col gap-5">
            <PrimaryButton label={"Send Email"} size={"xl"} variant={""} />
            <PrimaryButton
              label={"Send Email"}
              size={"xl"}
              variant={""}
              disabled
            />
          </div>
          {/* secondary */}
          <div className="flex flex-col gap-5">
            <PrimaryButton
              label={"Send Email"}
              size={"xl"}
              variant={"secondary"}
            />
            <PrimaryButton
              label={"Send Email"}
              size={"xl"}
              variant={"secondary"}
              disabled
            />
          </div>
          {/* ouline */}
          <div className="flex flex-col gap-5">
            <PrimaryButton
              label={"Send Email"}
              size={"xl"}
              variant={"outline"}
            />
            <PrimaryButton
              label={"Send Email"}
              size={"xl"}
              variant={"outline"}
              disabled
            />
          </div>
          {/* link */}
          <div className="flex flex-col gap-5">
            <PrimaryButton label={"Send Email"} size={"xl"} variant={"link"} />
            <PrimaryButton
              label={"Send Email"}
              size={"xl"}
              variant={"link"}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
