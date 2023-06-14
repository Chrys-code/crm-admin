import React, {
  FC,
  MutableRefObject,
  SVGProps,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconName } from '../icon';

export const useDynamicSVGImport = (
  name: IconName
): {
  error: boolean;
  isLoading: boolean;
  SvgIcon: FC<SVGProps<SVGSVGElement>> | undefined;
} => {
  const ImportedIconRef: MutableRefObject<
    FC<SVGProps<SVGSVGElement>> | undefined
  > = useRef<FC<SVGProps<SVGSVGElement>>>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!../../icons/${name}.svg`
          )
        ).default;
      } catch (error) {
        console.log('NOT FOUND ICON:', name);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  return { error, isLoading, SvgIcon: ImportedIconRef.current };
};
