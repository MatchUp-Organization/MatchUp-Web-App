import { Button } from "../Button/Button"
import "./FunctionButton.css"

export default function AccountFeatureSwapper({ content, buttonContent, onClickFunction }) {
    return (
        <div className="account-feature-swapper">
            {content}
            <span className="line">
                <a className="function-button" onClick={onClickFunction}>
                    <Button variant="default" size="default">
                        {buttonContent.length > 0 ? buttonContent : "Click Here"}
                    </Button>
                </a>
            </span>
        </div>
    )
}