import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

const TextBlock = ({ blok }) => {
    
    return (
        <div {...storyblokEditable(blok)}>
            {render(blok.content)}
        </div>
    );
}

export default TextBlock;
