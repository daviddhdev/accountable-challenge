export const LoadingIndicator = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 z-50">
      <div className="w-20 h-20 border-2 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
    </div>
  );
};
