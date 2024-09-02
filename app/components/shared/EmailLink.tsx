import { emailAddress } from "../../constants";

export default function EmailLink() {
    return (<a href={`mailto:${emailAddress}`}>{emailAddress}</a>)
}