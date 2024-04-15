interface Props {
    size?: "little" | "medium" | "big" | "bigger";
}

export const Logo = ({size = "medium"}: Props) => {

    let sizeLogo: number;

    switch (size) {
        case "little":
        sizeLogo = 53;
        break;

        case "medium":
        sizeLogo = 82;
        break;


        case "big":
        sizeLogo = 160;
        break;

        case "bigger":
        sizeLogo = 531;
        break;


}


    return(
        <div>

        </div>
    )
}