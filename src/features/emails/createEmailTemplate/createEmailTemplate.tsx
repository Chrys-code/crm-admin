import React, { FC, MutableRefObject, useEffect, useRef } from 'react';
import Section from '../../../layout/section/section';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import { CodeEditorContainer } from './createEmailTemplate.styles';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import { editorInitialvalue } from './helper';

const CreateEmailTemplate: FC = (): JSX.Element => {
  const previewRef: MutableRefObject<null> = useRef(null);

  useEffect((): (() => void) => {
    onChange(editorInitialvalue);
    return (): void => {};
  }, []);

  function onChange(newValue: string): void {
    if (newValue.includes('<script')) {
      toast.error('Remove script from template');
      return;
    }
    if (newValue.includes('eval(')) {
      toast.error('Remove eval() from template');
      return;
    }

    const editorPreviewFrame = ReactDOM.findDOMNode(previewRef.current);

    if (editorPreviewFrame) {
      // @ts-ignore
      editorPreviewFrame.contentWindow.document.body.innerHTML = newValue;
    }
  }

  return (
    <>
      <Section withBorder>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '60vh',
            width: '49%',
          }}
        >
          <iframe
            id="code_editor_preview"
            ref={previewRef}
            style={{
              border: 'none',
              width: '100%',
              alignSelf: 'flex-start',
              flexGrow: 1,
            }}
          ></iframe>
        </div>
        <CodeEditorContainer>
          <AceEditor
            mode="html"
            theme="xcode"
            onChange={onChange}
            name="code_editor"
            fontSize={14}
            value={editorInitialvalue}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            editorProps={{ $blockScrolling: true }}
            enableBasicAutocompletion
            enableLiveAutocompletion
            enableSnippets
            tabSize={2}
            setOptions={{
              highlightSelectedWord: true,
            }}
            style={{ minHeight: '60vh' }}
            width="100%"
          />
        </CodeEditorContainer>
      </Section>
    </>
  );
};
export default CreateEmailTemplate;
