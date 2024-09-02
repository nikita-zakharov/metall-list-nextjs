import { phoneNumber, phoneNumberFormatted } from "../../constants";

export default function PhoneLink() {
    return (<a href={`tel:${phoneNumber}`}>{phoneNumberFormatted}</a>)
}