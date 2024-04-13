import { useState } from "react"
import Signup from "./signup"
import Bio from "./bio"

const Index = () => {

    const [step, setStep] = useState<{
        stepOne?: boolean;
        stepTwo?: boolean;
    }>({
        stepOne: true,
        stepTwo: false
    })

  return (
    <div>
        {step.stepOne && <Signup setStep={setStep} />}
        {step.stepTwo && <Bio />}
    </div>
  )
}

export default Index
