import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStylesProps, Container, Icon } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStylesProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest } : Props) {
  return (
    <Container {...rest}>
      <Icon 
        name={icon} 
        type={type}
      />
    </Container>
  )
}