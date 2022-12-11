import React from "react";

const Routing = ({ formik }) => {
  return (
    <div className="w-1/4 sm:w-full lg:w-1/4 md:w-1/4 mx-2">
      <div className="panel action-card panel-default shadow-md">
        <div className="panel-heading">
          <h3 className="block text-gray-700 text-xs font-bold">
            Voice Mail Setup
          </h3>
        </div>
        <div className="panel-body">
          <div className="flex flex-col">
          <div className="form-group mb-4">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="voicemail message"
              >
                Voicemail Message
              </label>
              <textarea
                rows="4"
                id="voice_mail_mesg"
                name="voice_mail_mesg"
                value={formik.values.voice_mail_mesg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Voicemail message"
                className="w-full border border-slate-300 rounded py-1 px-2 text-gray-700 "
              />
            </div>
            <div className="form-group mb-4 flex">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="enable voice mail"
              >
                Enable Voice Mail:
              </label>
              <input
                type="checkbox"
                id="voice_mail_flg"
                name="voice_mail_flg"
                checked={formik.values.voice_mail_flg}
                onChange={formik.handleChange}
                className="border border-slate-300 mx-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Routing };
