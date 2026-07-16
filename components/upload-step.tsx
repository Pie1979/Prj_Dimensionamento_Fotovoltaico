'use client';

import { BillUploadDropzone, type UploadState } from '@/components/bill-upload-dropzone';
import { PrivacyNotice } from '@/components/privacy-notice';
import { ScenarioSelector } from '@/components/scenario-selector';
import { UploadStepActions } from '@/components/upload-step-actions';

type UploadStepProps = {
  scenario: number;
  onScenarioChange: (value: number) => void;
  uploadState: UploadState;
  uploadError?: string;
  fileName?: string;
  onFile: (file: File) => void;
  onManualEntry: () => void;
  onContinue: () => void;
  canContinue: boolean;
};

export function UploadStep({
  scenario,
  onScenarioChange,
  uploadState,
  uploadError,
  fileName,
  onFile,
  onManualEntry,
  onContinue,
  canContinue,
}: UploadStepProps) {
  return (
    <div className="space-y-6">
      <BillUploadDropzone
        onFile={onFile}
        state={uploadState}
        errorMessage={uploadError}
        fileName={fileName}
        disabled={uploadState === 'loading'}
      />
      <ScenarioSelector value={scenario} onChange={onScenarioChange} />
      <PrivacyNotice />
      <UploadStepActions
        onManualEntry={onManualEntry}
        onContinue={onContinue}
        canContinue={canContinue}
      />
    </div>
  );
}
