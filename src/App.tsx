import "./App.css";
import SecondaryButton from "./components/buttons/SecondaryButton";

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
            <SecondaryButton label={"Send Email"} size={"s"} variant={""} />
            <SecondaryButton
              label={"Send Email"}
              size={"s"}
              variant={""}
              disabled
            />
          </div>
          {/* secondary */}
          <div className="flex flex-col gap-5">
            <SecondaryButton
              label={"Send Email"}
              size={"s"}
              variant={"secondary"}
            />
            <SecondaryButton
              label={"Send Email"}
              size={"s"}
              variant={"secondary"}
              disabled
            />
          </div>
          {/* ouline */}
          <div className="flex flex-col gap-5">
            <SecondaryButton
              label={"Send Email"}
              size={"s"}
              variant={"outline"}
            />
            <SecondaryButton
              label={"Send Email"}
              size={"s"}
              variant={"outline"}
              disabled
            />
          </div>
          {/* link */}
          <div className="flex flex-col gap-5">
            <SecondaryButton label={"Send Email"} size={"s"} variant={"link"} />
            <SecondaryButton
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
            <SecondaryButton label={"Send Email"} size={"m"} variant={""} />
            <SecondaryButton
              label={"Send Email"}
              size={"m"}
              variant={""}
              disabled
            />
          </div>
          {/* secondary */}
          <div className="flex flex-col gap-5">
            <SecondaryButton
              label={"Send Email"}
              size={"m"}
              variant={"secondary"}
            />
            <SecondaryButton
              label={"Send Email"}
              size={"m"}
              variant={"secondary"}
              disabled
            />
          </div>
          {/* ouline */}
          <div className="flex flex-col gap-5">
            <SecondaryButton
              label={"Send Email"}
              size={"m"}
              variant={"outline"}
            />
            <SecondaryButton
              label={"Send Email"}
              size={"m"}
              variant={"outline"}
              disabled
            />
          </div>
          {/* link */}
          <div className="flex flex-col gap-5">
            <SecondaryButton label={"Send Email"} size={"m"} variant={"link"} />
            <SecondaryButton
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
            <SecondaryButton label={"Send Email"} size={"l"} variant={""} />
            <SecondaryButton
              label={"Send Email"}
              size={"l"}
              variant={""}
              disabled
            />
          </div>
          {/* secondary */}
          <div className="flex flex-col gap-5">
            <SecondaryButton
              label={"Send Email"}
              size={"l"}
              variant={"secondary"}
            />
            <SecondaryButton
              label={"Send Email"}
              size={"l"}
              variant={"secondary"}
              disabled
            />
          </div>
          {/* ouline */}
          <div className="flex flex-col gap-5">
            <SecondaryButton
              label={"Send Email"}
              size={"l"}
              variant={"outline"}
            />
            <SecondaryButton
              label={"Send Email"}
              size={"l"}
              variant={"outline"}
              disabled
            />
          </div>
          {/* link */}
          <div className="flex flex-col gap-5">
            <SecondaryButton label={"Send Email"} size={"l"} variant={"link"} />
            <SecondaryButton
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
            <SecondaryButton label={"Send Email"} size={"xl"} variant={""} />
            <SecondaryButton
              label={"Send Email"}
              size={"xl"}
              variant={""}
              disabled
            />
          </div>
          {/* secondary */}
          <div className="flex flex-col gap-5">
            <SecondaryButton
              label={"Send Email"}
              size={"xl"}
              variant={"secondary"}
            />
            <SecondaryButton
              label={"Send Email"}
              size={"xl"}
              variant={"secondary"}
              disabled
            />
          </div>
          {/* ouline */}
          <div className="flex flex-col gap-5">
            <SecondaryButton
              label={"Send Email"}
              size={"xl"}
              variant={"outline"}
            />
            <SecondaryButton
              label={"Send Email"}
              size={"xl"}
              variant={"outline"}
              disabled
            />
          </div>
          {/* link */}
          <div className="flex flex-col gap-5">
            <SecondaryButton
              label={"Send Email"}
              size={"xl"}
              variant={"link"}
            />
            <SecondaryButton
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
