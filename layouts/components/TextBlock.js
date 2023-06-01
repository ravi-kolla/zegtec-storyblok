import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

const TextBlock = ({ blok }) => {
    
    return (
        <div className={blok.textAlignment} {...storyblokEditable(blok)}>
            {render(blok.content)}
        </div>
    );
}

export default TextBlock;
