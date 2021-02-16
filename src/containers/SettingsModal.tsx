import { BaseButton } from "../components/BaseButton";
import { BaseModal } from "../components/BaseModal";
import { FlexBox } from "../components/FlexBox";
import { GrayUppercaseText } from "../components/GrayUppercaseText";
import { BaseInput } from "../components/BaseInput";
import { ExplanationText } from "../components/ExplanationText";
import { SettingsCard } from "../components/SettingsCard";

type SettingsModalProps = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
};

export const SettingsModal: React.FC<SettingsModalProps> = ({
  setModalIsOpen,
  modalIsOpen,
}) => {
  return (
    <BaseModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Settings"
      explanationText="All essentials are here: manage your stocks, thresholds and account's settings"
    >
      <section>
        <GrayUppercaseText mb="8px" mt="32px">
          email
        </GrayUppercaseText>
        <FlexBox>
          <BaseInput value="vasus14735@icloud.com" />
        </FlexBox>
        <ExplanationText mt="16px">
          You can change your email here
        </ExplanationText>
      </section>

      <section>
        <GrayUppercaseText mb="8px" mt="32px">
          threshold
        </GrayUppercaseText>
        <FlexBox>
          <BaseInput value="10%" />
        </FlexBox>
        <ExplanationText mt="16px">
          If the relative percentage is higher than this number you&apos;ll get
          notifications about it
        </ExplanationText>
      </section>

      <section>
        <GrayUppercaseText mb="8px" mt="32px">
          stock&apos;s list
        </GrayUppercaseText>

        <SettingsCard name="CHMF" />
        <SettingsCard name="FXIM" />
        <SettingsCard name="FXTB" />
        <SettingsCard name="FXWO" />

        <ExplanationText mt="16px">
          Manage your stock&apos;s list from here.
        </ExplanationText>
      </section>

      <FlexBox mt="32px">
        <BaseButton color="vivid red">Cancel</BaseButton>
        <BaseButton isSolid ml="16px" color="purple">
          Apply
        </BaseButton>
      </FlexBox>

      <FlexBox mt="32px">
        <BaseButton>Log Out</BaseButton>
      </FlexBox>
    </BaseModal>
  );
};
