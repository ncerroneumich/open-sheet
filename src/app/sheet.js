import Header from "@/client/header"
import SavingThrows from "@/client/saving_throws"
import Skills from "@/client/skills"
import Panel from "@/client/panel"

export default function Sheet() {
    return (
      <>
        <Header></Header>
        <SavingThrows></SavingThrows>
        <Skills></Skills>
        <Panel></Panel>
      </>
    )
}