import React from 'react';

const SomeComponent = (props) => {
    const { heading, children } = props;
    return (
        <article className="textBox">
            <header>{heading}</header>

            <div className="paragraphs">
                {children.map((child) => (
                    <section>{React.cloneElement(child)}</section>
                ))}
            </div>
        </article>
    );
};
export default SomeComponent;
