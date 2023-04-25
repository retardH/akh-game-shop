
const LanguageModal = ({modalClickHandler, closeLanguageModalBox}) => {
    return ( 
        <div className="language-container" onClick={modalClickHandler}>
            <span className="title">
                Languages
            </span>
            <fieldset>

            <div className="language-radio">
                <label htmlFor="myanmar-unicode">Myanmar Unicode</label>
                <input type="radio" value="myanmar-unicode" name="language" onClick={closeLanguageModalBox}/>
            </div>
            <div className="language-radio">
                <label htmlFor="english">English</label>
                <input type="radio" value="english" name="language" checked onClick={closeLanguageModalBox}/>
            </div>
            <div className="language-radio">
                <label htmlFor="myanmar-zawgyi">Myanmar</label>
                <input type="radio" value="myanmar-zawgyi" name="language" onClick={closeLanguageModalBox}/>
            </div>
            </fieldset>
            
        </div>
    );
}
 
export default LanguageModal;