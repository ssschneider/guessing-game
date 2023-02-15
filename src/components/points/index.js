import { PointsText } from "./styles"

const Score = ({ points }) => {
    return (
        <PointsText>
            Pontuação: {points} pontos
        </PointsText>
    )
}

export default Score