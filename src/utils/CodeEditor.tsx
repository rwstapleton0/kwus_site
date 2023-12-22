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
    code: string,
    setCode: Function,
}

function MoveEditor(props: MoveEditorProps) {
    return (
        <Container
            m="5"
            p="2"
            size="1"
            style={{ 
                background: "var(--gray-a2)", 
                // minHeight: 500,
                // maxWidth: 740, 
                borderRadius: 'var(--radius-3)' 
            }}
        >
            <Editor
                value={props.code}
                onValueChange={code => props.setCode(code)}
                highlight={highlightMove}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                }}
            />
            
        </Container>
    );
}

export default MoveEditor;