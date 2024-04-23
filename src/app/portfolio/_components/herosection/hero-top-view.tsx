import { Container } from "@/app/ui/container/container";
import { Typography } from "@/app/ui/design-system/typography/typography";
import { Tag } from "@/app/ui/tag/tag";

export const HeroTopView = () => {
    return (
        <Container className="my-40">
            <Typography variant="h1" component="h1" className="my-14">
            Je suis une UX et Ui designer qui explore l’intégration pour créer des interfaces réalistes.
            </Typography>
            <Tag variant="default">
                Disponible à partir d'octobre 2024
            </Tag>
        </Container>
    )
}