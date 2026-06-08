export function AdminField({ label, hint, children, className = "" }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-[12px] font-semibold text-navy mb-1.5">{label}</label>
      )}
      {children}
      {hint && <p className="text-[11px] text-text-3 mt-1.5">{hint}</p>}
    </div>
  );
}

export function AdminInput({ className = "", ...props }) {
  return (
    <input
      className={`admin-input w-full ${className}`}
      {...props}
    />
  );
}

export function AdminTextarea({ className = "", ...props }) {
  return (
    <textarea
      className={`admin-input w-full resize-y ${className}`}
      {...props}
    />
  );
}

export function AdminSelect({ className = "", children, ...props }) {
  return (
    <select className={`admin-input w-full ${className}`} {...props}>
      {children}
    </select>
  );
}

export function AdminCard({ title, children, className = "" }) {
  return (
    <div className={`bg-white border-[1.5px] border-border rounded-[10px] shadow-card ${className}`}>
      {title && (
        <div className="px-5 py-3.5 border-b border-border">
          <h3 className="text-[13px] font-bold text-navy">{title}</h3>
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}

export function AdminStatCard({ label, value, icon, accent = "blue" }) {
  const accents = {
    blue: "from-blue/10 to-blue/5 text-blue",
    green: "from-green/10 to-green/5 text-green",
    orange: "from-orange/10 to-orange/5 text-orange",
    navy: "from-navy/10 to-navy/5 text-navy",
  };

  return (
    <div className="bg-white border-[1.5px] border-border rounded-[10px] p-4 shadow-card flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-[10px] bg-gradient-to-br ${accents[accent]} flex items-center justify-center text-lg shrink-0`}
      >
        {icon}
      </div>
      <div>
        <p className="text-[11px] text-text-3 font-medium">{label}</p>
        <p className="text-[22px] font-extrabold text-navy leading-none mt-0.5">{value}</p>
      </div>
    </div>
  );
}
