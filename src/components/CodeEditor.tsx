import React from 'react';
import Editor from 'react-simple-code-editor';
import { Container } from "@radix-ui/themes";

const syntaxPatterns = {
    'comment': /\/\/.*|\/\*[\s\S]*?\*\//,
    'function': /(fun\s+(\w+)\s*(?=\())|(?:\w+)(\w+)\s*(?=\()/g,
    'keyword': /\b(module|use|struct|fun|has|let|mut|public)\b/g,
};

function highlightMove(code: string) {
    let highlightedCode = code;

    Object.entries(syntaxPatterns).forEach(([type, pattern]) => {
        highlightedCode = highlightedCode.replace(pattern, (match) => {
            return `<span class="token ${type}">${match}</span>`;
        });
    });

    return highlightedCode;
}

interface MoveEditorProps {
    initCode: string,
    completeCode: string,
} // do i need to get this from props, can i just get the correct awnser and use state in here?

// TODO: should give this tabs?
function MoveEditor(props: MoveEditorProps) {
    const [code, setCode] = React.useState(props.initCode);
    return (
        <Container
            m="5"
            p="2"
            size="1"
            style={{ 
                background: "var(--gray-a2)", 
                minHeight: 500,
                borderRadius: 'var(--radius-3)',
                boxShadow: '2px 2px 2px #5c5c5c' 
            }}
        >
            <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={highlightMove}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    height: 500,
                }}
            />
            
        </Container>
    );
}

export default MoveEditor;