import { Part } from "./Part"

const Content = ({parts}) => {
    return (
        <div>
            { parts.map((part) => <Part partName = {part.name} numberExercises = {part.exercises} />) }
        </div>
    )
}

export { Content }