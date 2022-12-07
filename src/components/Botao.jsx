import { View, Button } from "react-native"
export default (props) => {
    return (
        <View style={{
            width: props.size ?? "100%",
            marginTop: props.top ?? 0
        }}>
          <Button {...props}/>
        </View>
    )
}