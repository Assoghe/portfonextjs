import { Container } from "@/app/ui/container/container";
import { Typography } from "@/app/ui/design-system/typography/typography";

export const HeroTopView = () => {
    return (
        <Container className="pt-90 h-full text-center items-center">
            <Typography variant="h1" component="h1">
            Je suis une UX et Ui designer qui explore l’intégration pour créer des interfaces réalistes.
                </Typography>
        </Container>
    )
}