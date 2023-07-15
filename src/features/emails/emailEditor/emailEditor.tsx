import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import Section from '../../../layout/section/section';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import {
  CodeEditorContainer,
  PreviewFrame,
} from './emailEditor.styles';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import { editorInitialvalue } from './helper';
import { useDebounce } from '../../../utils/hooks';
import { useDispatch } from 'react-redux';
import { actions as emailActions } from '../../../store/reducers/email';
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { RootState, useAppSelector } from '../../../store/store';
import { Email } from '../../../store/apis/email/email.types';
import { EmailState } from '../../../store/reducers/email/email.types';

const EmailEditor: FC = (): JSX.Element => {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const { emailsById } = useAppSelector(
    (state: RootState): EmailState => state.email
  );
  const { id } = useParams();

  const dispatch = useDispatch();
  const previewRef: MutableRefObject<null> = useRef(null);

  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [templateValue, setTemplateValue] =
    useState<string>(editorInitialvalue);

  useDebounce(
    () => dispatch(emailActions.setCurrentEmailTemplate(templateValue)),
    600,
    [templateValue]
  );

  useEffect((): (() => void) => {
    if (
      !Object.keys(emailsById).length &&
      location.pathname.includes('update-template')
    )
      navigate('/email-templates/');
    return (): void => { };
  }, [emailsById]);

  useEffect((): (() => void) | undefined => {
    if (!id || !emailsById) return;
    const objId: string = id.split('=')[1];
    setSelectedEmail(emailsById[objId]);
    return (): void => { };
  }, [id, emailsById]);

  useEffect((): (() => void) | undefined => {
    if (selectedEmail) {
      onEditorChange(selectedEmail.template);
      return;
    }
    onEditorChange(editorInitialvalue);
    return (): void => { };
  }, [selectedEmail]);

  function onEditorChange(newValue: string): void {
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
      setTemplateValue(newValue);
    }
  }

  return (
    <>
      <Section withBorder>
        <PreviewFrame id="code_editor_preview" ref={previewRef}></PreviewFrame>
        <CodeEditorContainer>
          <AceEditor
            mode="html"
            theme="xcode"
            onChange={onEditorChange}
            name="code_editor"
            fontSize={14}
            value={templateValue}
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
export default EmailEditor;
