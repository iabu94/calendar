type ModalData = {
  show: boolean;
  onClose: any;
  holiday: Holiday | undefined;
};

export default function Modal({ show, onClose, holiday }: ModalData) {
  const handleOnClose = (e: any) => {
    if (e.target.id === "container") onClose();
  };

  function getHolidayText(isPublic: boolean, isMercantile: boolean, isBank: boolean): string {
    const holidayText = [];
    if (isPublic) {
      holidayText.push("Public");
    }
    if (isBank) {
      holidayText.push("Bank");
    }
    if (isMercantile) {
      holidayText.push("Mercantile");
    }

    if (holidayText.length > 2) {
        holidayText[0] = holidayText[0] + ',';
    }
    if (holidayText.length > 1) {
        holidayText.splice(holidayText.length - 1, 0, 'and');
    }
    
    holidayText.push('Holiday.')

    return holidayText.join(" ");
  }

  if (!show) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded">
        {!!holiday ? (
          <div className="text-sm">
            <p className="text-center font-semibold">{holiday.description}.</p>
            <p className="text-center">{getHolidayText(holiday.isPublic, holiday.isMercantile, holiday.isBank)}</p>
            </div>
        ) : (
          <div className="text-sm">No holidays on this day.</div>
        )}
      </div>
    </div>
  );
}
