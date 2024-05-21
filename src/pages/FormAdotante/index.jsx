import { Container } from './styles'

import { AdotanteRegisterHeader } from './../../components/AdotanteRegisterHeader'
import { useState } from "react"

export function FormAdotante() {

    const [currentStep, setCurrentStep] = useState(0);
    const [infoAdotanteVisible, setInfoAdotanteVisible] = useState(true);
    return(
      <Container>
        <AdotanteRegisterHeader currentStep={currentStep}>
            

        </AdotanteRegisterHeader>
      </Container>  

    )
}