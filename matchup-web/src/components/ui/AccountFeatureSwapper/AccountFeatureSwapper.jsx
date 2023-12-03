import "./FunctionButton.css"

export default function AccountFeatureSwapper({ content, onClickFunction }) {
    return (
        <div className="account-feature-swapper">
            Don't have an account?
            <span className="line">
                <a className="function-button" onClick={onClickFunction}>
                    {content}
                </a>
            </span>
        </div>
    )
}